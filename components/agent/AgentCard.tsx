import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { User, MessageCircle, Cpu, Briefcase, Calendar } from "lucide-react";

type Agent = {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
};

type Category =
  | "Customer Service"
  | "Marketing"
  | "Development"
  | "Business"
  | "Operations";

const iconsMap: Record<Category, React.FC<React.SVGProps<SVGSVGElement>>> = {
  "Customer Service": User,
  Marketing: MessageCircle,
  Development: Cpu,
  Business: Briefcase,
  Operations: Calendar,
};

function getIconByCategory(category: string) {
  if (category in iconsMap) {
    return iconsMap[category as Category];
  }
  return User;
}

export default function AgentCard({ agent }: { agent: Agent }) {
  const IconComponent = getIconByCategory(agent.category);

  return (
    <Card className="bg-white border shadow-md p-4 text-stone-800">
      <CardAction>
        <IconComponent className="w-6 h-6 text-gray-500" />
      </CardAction>

      <CardHeader>
        <CardTitle className="text-xl font-bold">{agent.name}</CardTitle>
        <CardDescription>{agent.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-2 mt-2 text-sm">
        <div>
          <span className="font-semibold">Status:</span> {agent.status}
        </div>
        <div>
          <span className="font-semibold">Category:</span> {agent.category}
        </div>
        <div>
          <span className="font-semibold">Pricing:</span> {agent.pricingModel}
        </div>
      </CardContent>
    </Card>
  );
}
