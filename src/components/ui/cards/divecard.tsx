import { Button } from "../button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../card";



export default function DiveCard() {
    return(
        <Card className="p-2">
                <CardHeader>
                  <CardTitle>Bali, Indonesia</CardTitle>
                  <CardDescription>May 15, 2023</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-1">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Duration:</span>
                      <span>45 min</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Depth:</span>
                      <span>18 m</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 dark:text-gray-400">Water Temp:</span>
                      <span>28°C</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button size="sm" variant="ghost">
                    View
                  </Button>
                  <Button size="sm" variant="ghost">
                    Edit
                  </Button>
                </CardFooter>
              </Card>
    )
}