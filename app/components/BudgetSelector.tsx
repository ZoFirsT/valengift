'use client';
import { motion } from 'framer-motion';

interface BudgetOption {
  id: string;
  label: string;
  range: string;
}

const budgetOptions: BudgetOption[] = [
  { id: '500', label: 'น้อยกว่า 500 บาท', range: '0-500' },
  { id: '1000', label: '500-1,000 บาท', range: '500-1000' },
  { id: '2000', label: '1,000-2,000 บาท', range: '1000-2000' },
  { id: '3000', label: '2,000-3,000 บาท', range: '2000-3000' },
  { id: '5000', label: 'มากกว่า 3,000 บาท', range: '3000-5000' },
];

interface Props {
  onSelect: (budgetId: string) => void;
}

export default function BudgetSelector({ onSelect }: Props) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-xl shadow-lg p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        งบประมาณของคุณเท่าไหร่?
      </h2>
      <div className="grid gap-4">
        {budgetOptions.map((option) => (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onSelect(option.id)}
            className="p-6 text-left border-2 rounded-xl border-gray-100 hover:border-pink-200 hover:bg-pink-50"
          >
            <span className="text-lg text-gray-700">{option.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
} 