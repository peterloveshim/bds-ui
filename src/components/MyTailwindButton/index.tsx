import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/util'

const buttonVariants = cva(
  'cursor-pointer w-full inline-flex items-center justify-center gap-2 whitespace-nowrap text-md font-bold transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:outline-none aria-invalid:focus-visible:ring-0',
  {
    variants: {
      variant: {
        default: 'bg-black text-white shadow-sm hover:bg-primary/90',
        outline:
          'border border-ep-black-8 bg-white shadow-xs hover:bg-accent hover:text-accent-foreground disabled:text-ep-black-20',
        destructive: 'bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive/90',
        secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
        ghost: 'hover:bg-primary/4',
        link: 'text-primary underline-offset-4 hover:underline',
        underline:
          'text-black bg-white border-b-1 border-ep-black-8 hover:bg-accent hover:text-accent-foreground',
        shadow: 'bg-white rounded-lg shadow-[1px_1px_4px_rgba(0,0,0,0.1)] ',
      },
      size: {
        default: 'h-auto px-4 py-4.5 has-[>svg]:px-3',
        sm: 'h-8 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 px-6 has-[>svg]:px-4',
        icon: 'size-9',
        inherit: 'w-auto',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

function BaseButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot='button'
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { BaseButton, buttonVariants }
