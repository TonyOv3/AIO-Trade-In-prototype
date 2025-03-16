import React from "react";
import NewDashboardLayout from "@/components/dashboard/NewDashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Plus,
  Phone,
  Mail,
  Calendar,
  Star,
  Filter,
} from "lucide-react";

export default function CRM() {
  return (
    <NewDashboardLayout>
      <div className="p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h1 className="text-2xl font-bold">Trader CRM</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" /> Add Contact
          </Button>
        </div>

        <Tabs defaultValue="contacts" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="contacts">Contacts</TabsTrigger>
            <TabsTrigger value="companies">Companies</TabsTrigger>
            <TabsTrigger value="deals">Deals</TabsTrigger>
          </TabsList>

          <TabsContent value="contacts" className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <Input
                  type="text"
                  placeholder="Search contacts..."
                  className="pl-8"
                />
              </div>
              <Button variant="outline" className="sm:w-auto">
                <Filter className="mr-2 h-4 w-4" /> Filters
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Contact Card 1 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                          alt="John Smith"
                        />
                        <AvatarFallback>JS</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">John Smith</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          TechTraders Inc.
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>john.smith@techtraders.com</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Last contact: 2 days ago</span>
                    </div>
                    <div className="pt-2">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                        Wholesale Buyer
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-3 w-3 mr-1" /> Call
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="h-3 w-3 mr-1" /> Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card 2 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                          alt="Sarah Johnson"
                        />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Sarah Johnson</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          MobileDeals LLC
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>(555) 987-6543</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>sarah@mobiledeals.com</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Last contact: Today</span>
                    </div>
                    <div className="pt-2">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">
                        VIP Client
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-3 w-3 mr-1" /> Call
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="h-3 w-3 mr-1" /> Email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card 3 */}
              <Card>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage
                          src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                          alt="Michael Brown"
                        />
                        <AvatarFallback>MB</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-lg">Michael Brown</CardTitle>
                        <p className="text-sm text-muted-foreground">
                          PixelPerfect Retail
                        </p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>(555) 456-7890</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>michael@pixelperfect.com</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>Last contact: 1 week ago</span>
                    </div>
                    <div className="pt-2">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                        Retail Partner
                      </Badge>
                    </div>
                  </div>
                  <div className="mt-4 flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Phone className="h-3 w-3 mr-1" /> Call
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Mail className="h-3 w-3 mr-1" /> Email
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6 flex justify-center">
              <Button variant="outline">Load More</Button>
            </div>
          </TabsContent>

          <TabsContent value="companies">
            <Card>
              <CardHeader>
                <CardTitle>Companies</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  View and manage your partner companies.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deals">
            <Card>
              <CardHeader>
                <CardTitle>Deals Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Track your active deals and sales pipeline.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </NewDashboardLayout>
  );
}
