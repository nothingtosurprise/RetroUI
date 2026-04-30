"use client";

import { Tabs } from "@/components/retroui/Tab";

export default function TabStyleDefault() {
  return (
    <Tabs className="w-full" defaultValue="home">
      <Tabs.List>
        <Tabs.Trigger value="home">Home</Tabs.Trigger>
        <Tabs.Trigger value="about">About</Tabs.Trigger>
        <Tabs.Trigger value="contact">Contact</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="home">
        Welcome to RetroUI!!
      </Tabs.Content>
      <Tabs.Content value="about">This is the about section!</Tabs.Content>
      <Tabs.Content value="contact">And, this is the contact section!</Tabs.Content>
    </Tabs>
  );
}
