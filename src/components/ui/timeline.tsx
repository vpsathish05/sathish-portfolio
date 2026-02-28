import * as React from "react"

export const Timeline = ({ children }: { children: React.ReactNode }) => {
  return <div className="space-y-8">{children}</div>
}

export const TimelineItem = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative pl-8">{children}</div>
}

export const TimelineIcon = () => {
  return (
    <div className="absolute left-0 flex w-6 h-6 items-center justify-center rounded-full bg-primary">
      <div className="h-2 w-2 rounded-full bg-background"></div>
    </div>
  )
}

export const TimelineConnector = () => {
  return <div className="absolute left-3 top-8 -bottom-8 w-px bg-border"></div>
}

export const TimelineContent = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>
}