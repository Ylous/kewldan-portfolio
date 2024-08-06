'use client';

import {Button} from "@/components/ui/button";
import React, {useTransition} from "react";
import {Languages} from "lucide-react";
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import {setUserLocale} from "@/locales";
import {Locale} from "@/config";
import {useTranslations} from "next-intl";

export default function I18nSwitch() {
    const t = useTranslations('Locales');
    const [isPending, startTransition] = useTransition();

    function onChange(value: string) {
        const locale = value as Locale;
        startTransition(() => {
            setUserLocale(locale).then();
        });
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                    <Languages/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={() => {
                    onChange('ru');
                }}>{t('ru')}</DropdownMenuItem>
                <DropdownMenuItem onClick={() => {
                    onChange('en');
                }}>{t('en')}</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}