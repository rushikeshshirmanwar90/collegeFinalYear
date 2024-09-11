import React from 'react'; // Add React import

import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card";
import { RadioGroupItem, RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function MCQs() {
  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="pb-0">
        <div>JavaScript Quiz</div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-4">
          <p className="font-semibold">What is the output of the following code?</p>
          <div>console.log(1 + &quot;2&quot; + &quot;2&quot; + 3);</div>
        </div>
        <div className="space-y-2">
          <RadioGroup defaultValue="a">
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="mcq-a" value="a" /> {/* Remove name prop */}
              <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed" htmlFor="mcq-a">
                a) 1223
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="mcq-b" value="b" /> {/* Remove name prop */}
              <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed" htmlFor="mcq-b">
                b) 6
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="mcq-c" value="c" /> {/* Remove name prop */}
              <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed" htmlFor="mcq-c">
                c) 7
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem id="mcq-d" value="d" /> {/* Remove name prop */}
              <Label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed" htmlFor="mcq-d">
                d) 1223
              </Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
      <CardFooter className="border-t p-4 justify-end">
        <Button>Clear</Button>
      </CardFooter>
    </Card>
  );
}
