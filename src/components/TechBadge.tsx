"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface TechBadgeProps {
  name: string;
  color: string;
  icon?: React.ElementType;
}

export const TechBadge: React.FC<TechBadgeProps> = ({ name, color, icon: Icon }) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger>
        <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 400 }}>
          <Badge className="flex items-center gap-1">
            {Icon && <Icon className="w-4 h-4" style={{ color }} />}
            {name}
          </Badge>
        </motion.div>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);
