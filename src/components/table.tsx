import dot from 'dot-object'
import { ChevronDown, ChevronUp, ChevronsUpDown, Ellipsis } from 'lucide-react'
import { type ReactNode, useMemo } from 'react'
import { cn } from '@/lib/utils'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './dropdown-menu'
import { IconButton } from './icon-button'

type AlignType = 'left' | 'center' | 'right'

type SortType = {
  dataIndex: string
  direction: 'asc' | 'desc'
}

type HeaderType<T> = {
  dataIndex: string
  label: string
  size?: string
  render?: (data: {
    value: T[keyof T]
    item: T
  }) => ReactNode
  align?: AlignType
  sortable?: boolean
}

type ActionType<T> = {
  label: string
  onClick: (data: T) => void
  disabled?: boolean
  visible?: boolean
}

interface TableProps<T> {
  rowId: string
  data: T[]
  headers: HeaderType<T>[]
  rowsSelected?: T[]
  onRowSelection?: (item: T[]) => void
  sort?: SortType | null
  onSort?: (data: SortType | null) => void
  actions?: ActionType<T>[]
  footer?: Partial<T>
}

function Table<T>({
  rowId,
  data,
  headers,
  rowsSelected = [],
  onRowSelection,
  sort,
  onSort,
  actions,
  footer,
}: TableProps<T>) {
  const headersToRender = useMemo(() => {
    let items: HeaderType<T>[] = headers

    if (onRowSelection) {
      items = [
        {
          dataIndex: 'row.selection',
          label: '',
        },
        ...items,
      ]
    }

    if (actions?.length) {
      items = [
        ...items,
        {
          dataIndex: 'row.actions',
          label: '',
        },
      ]
    }

    return items
  }, [headers, onRowSelection, actions])

  const sizes = headersToRender.reduce((acc: string, item) => {
    if (item.dataIndex === 'row.selection') {
      return `${acc} 40px`
    }

    if (item.dataIndex === 'row.actions') {
      return `${acc} 48px`
    }

    if (item.size) {
      return `${acc} ${item.size}`
    }

    return `${acc} 1fr`
  }, '')

  function handleHeaderSelection() {
    const selection = rowsSelected.filter((row) =>
      data.some((item) => dot.pick(rowId, item) === dot.pick(rowId, row))
    ).length

    if (selection === data.length) {
      onRowSelection!(
        rowsSelected.filter(
          (row) =>
            !data.some((item) => dot.pick(rowId, item) === dot.pick(rowId, row))
        )
      )

      return
    }

    onRowSelection!(
      [...rowsSelected, ...data].filter(
        (item, index, self) => self.indexOf(item) === index
      )
    )
  }

  function handleRowSelection(item: T) {
    const findRow = rowsSelected.some(
      (row) => dot.pick(rowId, row) === dot.pick(rowId, item)
    )

    if (findRow) {
      onRowSelection!(
        rowsSelected.filter(
          (row) => dot.pick(rowId, row) !== dot.pick(rowId, item)
        )
      )

      return
    }

    onRowSelection!([...rowsSelected, item])
  }

  function handleSort(dataIndex: string) {
    if (!sort || sort.dataIndex !== dataIndex) {
      onSort!({
        dataIndex,
        direction: 'asc',
      })

      return
    }

    if (sort.direction === 'asc') {
      onSort!({
        dataIndex,
        direction: 'desc',
      })

      return
    }

    onSort!(null)
  }

  return (
    <div
      className="bg-zinc-100 overflow-auto grid"
      style={{
        gridTemplateColumns: sizes,
      }}
    >
      {headersToRender.map((column) => {
        if (column.dataIndex === 'row.selection') {
          const selection = rowsSelected.filter((row) =>
            data.some((item) => dot.pick(rowId, item) === dot.pick(rowId, row))
          ).length

          return (
            <button
              key={column.dataIndex}
              type="button"
              onClick={handleHeaderSelection}
              className="bg-zinc-200 sticky top-0 cursor-pointer left-0 z-10"
            >
              {selection === 0 && '□'}
              {selection > 0 && selection < data.length && '▤'}
              {selection === data.length && '▣'}
            </button>
          )
        }

        if (column.dataIndex === 'row.actions') {
          return (
            <div
              key={column.dataIndex}
              className="bg-zinc-200 sticky top-0 right-0 z-10"
            />
          )
        }

        if (column.sortable && onSort) {
          return (
            <button
              type="button"
              key={column.dataIndex}
              className="bg-zinc-200 px-2 h-10 text-sm font-medium flex items-center justify-between whitespace-nowrap sticky top-0 cursor-pointer"
              onClick={() => handleSort(column.dataIndex)}
            >
              {column.label}

              {sort?.dataIndex === column.dataIndex ? (
                <>
                  {sort.direction === 'asc' && (
                    <ChevronUp className="size-[14px]" />
                  )}
                  {sort.direction === 'desc' && (
                    <ChevronDown className="size-[14px]" />
                  )}
                </>
              ) : (
                <ChevronsUpDown className="size-[14px]" />
              )}
            </button>
          )
        }

        return (
          <div
            key={column.dataIndex}
            className="bg-zinc-200 px-2 h-10 text-sm font-medium flex items-center whitespace-nowrap sticky top-0"
          >
            {column.label}
          </div>
        )
      })}

      {data.map((item) =>
        headersToRender.map((column) => {
          if (column.dataIndex === 'row.selection') {
            const findRow = rowsSelected.find(
              (row) => dot.pick(rowId, row) === dot.pick(rowId, item)
            )

            return (
              <button
                key={`${column.dataIndex}-${dot.pick(rowId, item)}`}
                type="button"
                onClick={() => handleRowSelection(item)}
                className="cursor-pointer sticky left-0 bg-zinc-100"
              >
                {findRow ? '▣' : '□'}
              </button>
            )
          }

          if (column.dataIndex === 'row.actions') {
            return (
              <div
                key={`${column.dataIndex}-${dot.pick(rowId, item)}`}
                className="bg-zinc-100 sticky right-0 flex items-center justify-center"
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <IconButton>
                      <Ellipsis />
                    </IconButton>
                  </DropdownMenuTrigger>

                  <DropdownMenuContent align="end">
                    {actions!.map((action) => (
                      <DropdownMenuItem
                        key={action.label}
                        onClick={() => action.onClick(item)}
                      >
                        {action.label}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )
          }

          return (
            <div
              key={`${column.dataIndex}-${dot.pick(rowId, item)}`}
              className={cn(
                'whitespace-nowrap px-2 text-sm h-12 flex items-center justify-start',
                column.align === 'center' && 'justify-center',
                column.align === 'right' && 'justify-end'
              )}
            >
              {column.render
                ? column.render({
                  value: dot.pick(column.dataIndex, item),
                  item,
                })
                : dot.pick(column.dataIndex, item)}
            </div>
          )
        })
      )}

      {footer &&
        headersToRender.map((column) => {
          if (column.dataIndex === 'row.selection') {
            return (
              <div className="bg-zinc-200 sticky bottom-0 left-0 z-10 h-10" />
            )
          }

          if (column.dataIndex === 'row.actions') {
            return (
              <div className="bg-zinc-200 sticky bottom-0 right-0 z-10 h-10" />
            )
          }

          return (
            <div
              key={`${column.dataIndex}-${dot.pick(rowId, footer)}`}
              className="bg-zinc-200 sticky bottom-0 h-10 text-sm flex items-center px-2"
            >
              {dot.pick(column.dataIndex, footer)}
            </div>
          )
        })}

      {!data.length && (
        <div
          className="h-[320px] flex items-center justify-center"
          style={{ gridColumn: '1/-1' }}
        >
          <p>empty</p>
        </div>
      )}
    </div>
  )
}

export type { AlignType, SortType, HeaderType, ActionType, TableProps }
export { Table }
