"use client";

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { casesData, caseStatistics } from "@/data/mockData";
import { formatDate } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Search, FileText, Users, BarChart3, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Filter cases based on search query
  const filteredCases = casesData.filter(
    (caseItem) =>
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.type.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Get recent cases
  const recentCases = [...filteredCases]
    .sort((a, b) => new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime())
    .slice(0, 5);

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-3xl font-bold mb-4 md:mb-0">Legal Cases Dashboard</h1>
        <div className="flex w-full md:w-auto gap-2">
          <Input
            placeholder="Search cases..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="md:w-64"
          />
          <Link href="/cases/new">
            <Button>New Case</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Total Cases</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caseStatistics.total}</div>
            <p className="text-xs text-muted-foreground">
              Across all categories and statuses
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Active Cases</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caseStatistics.active}</div>
            <p className="text-xs text-muted-foreground">
              Currently in progress
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Resolution Rate</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round((caseStatistics.resolved / caseStatistics.total) * 100)}%
            </div>
            <p className="text-xs text-muted-foreground">
              {caseStatistics.resolved} cases resolved
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Avg. Resolution Time</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{caseStatistics.resolutionTimeAvg} days</div>
            <p className="text-xs text-muted-foreground">
              From filing to resolution
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 grid-cols-1 lg:grid-cols-2 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Case Resolution</CardTitle>
          </CardHeader>
          <CardContent className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={caseStatistics.monthlyResolution}>
                <XAxis dataKey="month" />
                <YAxis allowDecimals={false} />
                <Tooltip />
                <Bar dataKey="count" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Recent Cases</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentCases.map((caseItem) => (
                <div
                  key={caseItem.id}
                  className="flex items-center gap-4 p-2 hover:bg-muted rounded-md"
                >
                  <div className={`w-2 h-16 rounded ${
                    caseItem.status === "active"
                      ? "bg-blue-500"
                      : caseItem.status === "pending"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`} />
                  <div className="flex-1">
                    <Link href={`/cases/${caseItem.id}`}>
                      <h3 className="font-medium">{caseItem.title}</h3>
                    </Link>
                    <p className="text-sm text-muted-foreground">{caseItem.type}</p>
                    <p className="text-xs">{formatDate(caseItem.dateFiled)}</p>
                  </div>
                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                    caseItem.status === "active"
                      ? "bg-blue-100 text-blue-800"
                      : caseItem.status === "pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : "bg-green-100 text-green-800"
                  }`}>
                    {caseItem.status}
                  </div>
                </div>
              ))}
              <Link href="/cases">
                <Button variant="outline" className="w-full mt-2">
                  View All Cases
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
