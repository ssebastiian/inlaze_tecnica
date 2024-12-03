'use client';

import React, { FC, JSXElementConstructor, PropsWithChildren, ReactNode } from "react";
import ThemeRegistry from "./ThemeRegistry";

import { MovieProvider } from "@/context";
import { ThemeToggleProvider } from "@/themes";

interface ComponentProps {
  components: Array<JSXElementConstructor<PropsWithChildren<unknown>>>
  children: ReactNode
}

function ComponentProvider(props: ComponentProps) {
  const { components = [], children } = props
  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}

interface Props {
  children: React.ReactNode
}

export const Providers: FC<Props> = ({ children }) => {

  return (
        <ComponentProvider components={[
          MovieProvider,
        ]}>
          <ThemeToggleProvider>
            <ThemeRegistry options={{ key: 'mui' }}>
              {children}
            </ThemeRegistry>
          </ThemeToggleProvider>
        </ComponentProvider>

  );
}