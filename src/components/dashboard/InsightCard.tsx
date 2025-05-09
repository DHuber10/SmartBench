
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReactNode } from "react";

interface InsightCardProps {
  title: string;
  icon: ReactNode;
  variant?: "default" | "highlight" | "success" | "warning";
  children: ReactNode;
  actionLabel?: string;
  onAction?: () => void;
}

export function InsightCard({
  title,
  icon,
  variant = "default",
  children,
  actionLabel,
  onAction,
}: InsightCardProps) {
  const getBgColor = () => {
    switch (variant) {
      case "highlight":
        return "bg-smartbench-blue/5 border-smartbench-blue/20";
      case "success":
        return "bg-green-50 border-green-100";
      case "warning":
        return "bg-amber-50 border-amber-100";
      default:
        return "bg-white";
    }
  };

  const getIconColor = () => {
    switch (variant) {
      case "highlight":
        return "text-smartbench-blue bg-smartbench-blue/10";
      case "success":
        return "text-green-600 bg-green-100";
      case "warning":
        return "text-amber-600 bg-amber-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };

  return (
    <Card className={`${getBgColor()}`}>
      <CardHeader className="flex flex-row items-center gap-3">
        <div className={`p-2 rounded-full ${getIconColor()}`}>
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-gray-700">{children}</div>
      </CardContent>
      {actionLabel && (
        <CardFooter>
          <Button variant="outline" onClick={onAction}>
            {actionLabel}
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
