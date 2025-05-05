"use client";

import { useState } from "react";
import Link from "next/link";
import { casesData } from "@/data/mockData";
import { formatDate, getStatusTextColor } from "@/lib/utils";
import {
  Search,
  Filter,
  ArrowUpDown,
  ChevronDown,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CasesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortBy, setSortBy] = useState("dateFiled");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  // Get unique case types
  const caseTypes = Array.from(new Set(casesData.map(caseItem => caseItem.type)));
  
  // Filter cases
  const filteredCases = casesData.filter(caseItem => {
    const matchesSearch = 
      caseItem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      caseItem.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || caseItem.status === statusFilter;
    const matchesType = typeFilter === "all" || caseItem.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });
  
  // Sort cases
  const sortedCases = [...filteredCases].sort((a, b) => {
    if (sortBy === "dateFiled") {
      return sortOrder === "desc"
        ? new Date(b.dateFiled).getTime() - new Date(a.dateFiled).getTime()
        : new Date(a.dateFiled).getTime() - new Date(b.dateFiled).getTime();
    }
    
    if (sortBy === "title") {
      return sortOrder === "desc"
        ? b.title.localeCompare(a.title)
        : a.title.localeCompare(b.title);
    }
    
    if (sortBy === "status") {
      return sortOrder === "desc"
        ? b.status.localeCompare(a.status)
        : a.status.localeCompare(b.status);
    }
    
    return 0;
  });

  return (
    <div className="container p-4 mx-auto">
      <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 mb-6">
        <h1 className="text-3xl font-bold">Case Management</h1>
        <Link href="/cases/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Case
          </Button>
        </Link>
      </div>

      <Card className="mb-6">
        <CardContent className="p-4">
          <div className="flex flex-col space-y-4 md:flex-row md:items-center md:space-x-4 md:space-y-0">
            <div className="flex-1 relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search cases by title, client or ID..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-8"
              />
            </div>
            <Select
              value={statusFilter}
              onValueChange={setStatusFilter}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <Filter className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Status filter" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select
              value={typeFilter}
              onValueChange={setTypeFilter}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <ChevronDown className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Case type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                {caseTypes.map((type) => (
                  <SelectItem key={type} value={type}>{type}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select
              value={sortBy}
              onValueChange={setSortBy}
            >
              <SelectTrigger className="w-full md:w-[180px]">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dateFiled">Date Filed</SelectItem>
                <SelectItem value="title">Case Title</SelectItem>
                <SelectItem value="status">Status</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
            >
              {sortOrder === "asc" ? "↑" : "↓"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 grid-cols-1">
        {sortedCases.length > 0 ? (
          sortedCases.map((caseItem) => (
            <Link href={`/cases/${caseItem.id}`} key={caseItem.id}>
              <Card className="hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-col space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-lg">{caseItem.title}</h3>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusTextColor(caseItem.status)}`}>
                          {caseItem.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{caseItem.type} • {caseItem.id}</p>
                    </div>
                    <div className="flex flex-col md:items-end mt-4 md:mt-0">
                      <p className="text-sm">Filed: <span className="font-medium">{formatDate(caseItem.dateFiled)}</span></p>
                      <p className="text-sm">Client: <span className="font-medium">{caseItem.clientName}</span></p>
                      <p className="text-sm">Paralegal: <span className="font-medium">{caseItem.assignedParalegal}</span></p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))
        ) : (
          <div className="text-center p-8">
            <p className="text-muted-foreground">No cases found matching your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
