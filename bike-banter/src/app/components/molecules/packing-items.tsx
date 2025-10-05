'use client';

import { getUserPackingItems } from "@/utils/get-user-packing-items";
import { saveUserPackingItems } from "@/utils/save-user-packing-item";
import { markPackingItemAsPacked } from "@/utils/mark-packing-item-as-packed";
import React, { useEffect } from 'react';
import { Input } from "@/components/ui/input"
import { CheckedState } from "@radix-ui/react-checkbox";
import { PackingItem } from "@/interfaces/packing-item";
import { Checkbox } from "@/components/ui/checkbox";

export default function PackingItems() {

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


    const [packingItems, setPackingItems] = React.useState<PackingItem[]>([]);
    const [newPackingItem, setValue] = React.useState("");

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
        <div className="bg-muted/50 aspect-video rounded-xl">
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">Checklist</h2>
            </div>
            <div className="p-4">
                <form onSubmit={handleSubmit}>
                    <Input type="text" value={newPackingItem} onChange={handleChange} />
                </form>
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 packing-items">
                    {packingItems.length === 0 ? (
                        <p>No items found</p>
                    ) : (
                        <ul>
                            {/* Should be moved to its own component. Probably an atom */}
                            {packingItems.map((item, index) => (
                                <li key={index} className="flex flex-row items-center gap-2">
                                    <Checkbox defaultChecked={item.packed} onCheckedChange={(checked) => packingItemPacked(item.item_id, checked)} />{item.item_name}
                                </li>
                            ))}
                        </ul>
                    )}
                </h2>
            </div>
        </div>
    );
}