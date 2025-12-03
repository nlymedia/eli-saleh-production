import React, { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggleOpen: () => void;
}
const AccordionItem = ({
  title,
  children,
  isOpen,
  toggleOpen
}: AccordionItemProps) => {
  return <div className="border-b border-gray-200">
      <button className="flex justify-between items-center w-full py-4 text-left focus:outline-none" onClick={toggleOpen}>
        <span className="text-lg font-light">{title}</span>
        {isOpen ? <ChevronUpIcon size={20} className="text-gray-500" /> : <ChevronDownIcon size={20} className="text-gray-500" />}
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <div className="text-gray-600">{children}</div>
      </div>
    </div>;
};
interface AccordionProps {
  items: Array<{
    title: string;
    content: React.ReactNode;
  }>;
  allowMultiple?: boolean;
}
const Accordion = ({
  items,
  allowMultiple = false
}: AccordionProps) => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);
  const toggleItem = (index: number) => {
    if (allowMultiple) {
      setOpenIndexes(prevIndexes => prevIndexes.includes(index) ? prevIndexes.filter(i => i !== index) : [...prevIndexes, index]);
    } else {
      setOpenIndexes(prevIndexes => prevIndexes.includes(index) ? [] : [index]);
    }
  };
  return <div className="border-t border-gray-200">
      {items.map((item, index) => <AccordionItem key={index} title={item.title} isOpen={openIndexes.includes(index)} toggleOpen={() => toggleItem(index)}>
          {item.content}
        </AccordionItem>)}
    </div>;
};
export default Accordion;