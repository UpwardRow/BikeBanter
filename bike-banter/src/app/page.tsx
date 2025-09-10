'use client';

import Image from "next/image";
import React, { useEffect } from 'react';
import { getUserLocation } from "@/utils/get-user-location";
import UserGoogleMap from "@/app/components/organisms/google-journey-map";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/app/components/templates/sidebar-components/app-sidebar";
import { getUserPackingItems } from "@/utils/get-user-packing-items";
import { saveUserPackingItems } from "@/utils/save-user-packing-item";
import { markPackingItemAsPacked } from "@/utils/mark-packing-item-as-packed";
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { PackingItem } from "@/interfaces/packing-item";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import { CheckedState } from "@radix-ui/react-checkbox";


export default function Home({ children }: { children: React.ReactNode }) {

  const [userLocation, setUserLocation] = React.useState<google.maps.LatLng | null>(null);
  const [packingItems, setPackingItems] = React.useState<PackingItem[]>([]);
  const [newPackingItem, setValue] = React.useState("");

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const location = await getUserLocation();
        setUserLocation(location);
        console.log('Fetched user location:' + location.toString());
      } catch (error) {
        console.error('Error fetching user location:', error);
      }
    };

    fetchUserLocation();
  }, []);

  useEffect(() => {
    const fetchPackingItems = async () => {
      try {
        const items = await getUserPackingItems();
        setPackingItems(items);
        console.log('Fetched packing items:', items);
      } catch (error) {
        console.error('Error fetching packing items:', error);
      }
    };

    fetchPackingItems();
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted:", newPackingItem);
    saveUserPackingItems(newPackingItem);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const packingItemPacked = (itemId: number, checked: CheckedState) => {
    if (checked === true) {
      markPackingItemAsPacked(itemId, true);
    } else if (checked === false) {
      markPackingItemAsPacked(itemId, false);
    }
    console.log("Checkbox checked state:", checked);
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] gap-16 font-[family-name:var(--font-geist-sans)]">
      <SidebarProvider>
      <AppSidebar/>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Journey Map
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-3 pt-0">
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" >
            <UserGoogleMap />
          </div>
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="bg-muted/50 aspect-video rounded-xl">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Checklist</h2>
              </div>
              <div className="p-4">
                <form onSubmit={handleSubmit}>
                  <Input type ="text" value={newPackingItem} onChange={handleChange}/>
                </form>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 packing-items">
                  {packingItems.length === 0 ? (
                    <p>No items found</p>
                  ) : (
                    <ul>
                      {packingItems.map((item, index) => (
                        <li key={index} className="flex flex-row items-center gap-2">
                          <Checkbox defaultChecked={item.packed} onCheckedChange={(checked) => packingItemPacked(item.item_id, checked)}/>{item.item_name}
                        </li>
                      ))}
                    </ul>
                  )}
                </h2>
              </div>
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl">
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Bike</h2>
              </div>
            </div>
            <div className="bg-muted/50 aspect-video rounded-xl" >
              <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">Duration</h2>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
