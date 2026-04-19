"use client";

import { useState } from "react";
import { Card, Text } from "@/components/retroui";
import { Tabs } from "@/components/retroui/Tab";
import { blockConfig } from "@/config/blocks";
import Image from "next/image";
import { Search, Figma, Megaphone, ListMinus, LayoutGrid } from "lucide-react";

export default function BlocksPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [activeTab, setActiveTab] = useState("all");

    // Filter blocks based on active tab and search query
    const getFilteredBlocks = () => {
        let filtered = blockConfig.blocks.filter(block => block.stage === "published");

        // Filter by tab
        if (activeTab === "marketing") {
            filtered = filtered.filter(block => block.type === "marketing");
        } else if (activeTab === "application") {
            filtered = filtered.filter(block => block.type === "application");
        }

        // Filter by search query
        if (searchQuery.trim()) {
            filtered = filtered.filter(block =>
                block.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return filtered;
    };

    const filteredBlocks = getFilteredBlocks();

    return (
        <main className="container mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="mb-12">
                <div className="flex">
                    <Text as="h1" className="uppercase text-3xl lg:text-4xl">
                        RetroUI {" "}
                        <span className="text-outline-foreground-sm text-shadow-foreground-sm">Blocks</span>
                    </Text>
                    <Image
                        src="/decor/lego.svg"
                        alt="blocks decoration"
                        width={60}
                        height={60}
                        className="h-[60px] w-[60px] -ml-6 -mt-4"
                    />
                </div>
                <p className="text-muted-foreground max-w-4xl">
                    Accelerate development with 300+ React UI blocks for apps, dashboards, e-commerce, and AI.
                    RetroUI Blocks enhance open-source components with layouts and design patterns. Designed for
                    easy integration, these blocks are responsive and compatible with any React framework, speeding
                    up UI development for MCP and LLM workflows.
                </p>
            </div>


        </main>
    );
}