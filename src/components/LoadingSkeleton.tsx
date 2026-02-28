import { Card, CardContent, CardHeader } from "@/components/ui/card";

const SkeletonLine = ({ className = "" }: { className?: string }) => (
  <div className={`animate-pulse bg-muted rounded ${className}`} />
);

export const LoadingSkeleton = () => (
  <div className="container mx-auto px-4 py-8">
    <div className="flex justify-between items-center mb-8">
      <SkeletonLine className="h-8 w-48" />
      <SkeletonLine className="h-10 w-10 rounded-full" />
    </div>

    {/* Personal Info Skeleton */}
    <Card className="mb-16">
      <CardContent className="flex flex-col md:flex-row items-center p-6">
        <SkeletonLine className="w-40 h-40 rounded-full mb-4 md:mb-0 md:mr-6" />
        <div className="flex-1">
          <SkeletonLine className="h-6 w-64 mb-2" />
          <SkeletonLine className="h-4 w-96 mb-4" />
          <div className="flex flex-wrap gap-2 mb-4">
            {[...Array(7)].map((_, i) => (
              <SkeletonLine key={i} className="h-6 w-16" />
            ))}
          </div>
          <div className="flex gap-4">
            <SkeletonLine className="h-4 w-48" />
            <SkeletonLine className="h-4 w-32" />
          </div>
        </div>
      </CardContent>
    </Card>

    {/* Other sections */}
    {[...Array(5)].map((_, i) => (
      <Card key={i} className="mb-16">
        <CardHeader>
          <SkeletonLine className="h-6 w-32" />
        </CardHeader>
        <CardContent>
          <SkeletonLine className="h-4 w-full mb-2" />
          <SkeletonLine className="h-4 w-3/4 mb-2" />
          <SkeletonLine className="h-4 w-1/2" />
        </CardContent>
      </Card>
    ))}
  </div>
);
