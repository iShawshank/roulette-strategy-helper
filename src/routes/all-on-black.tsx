import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import React from 'react';

const AllOnBlack = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>9 Streets</AccordionTrigger>
          <AccordionContent>
            Here is the 9 streets strat
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AllOnBlack;
