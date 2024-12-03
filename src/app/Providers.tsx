'use client';

import React, { FC } from "react";
import ThemeRegistry from "./ThemeRegistry";

import { movieProvider } from "@/context";
import { ThemeToggleProvider } from "@/themes";

/* import { ThemeToggleProvider } from "@/context/themes"; */


interface ComponentProps {
  components: Array<React.JSXElementConstructor<React.PropsWithChildren<unknown>>>
  children: React.ReactNode
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
          movieProvider,
        ]}>
          <ThemeToggleProvider>
            <ThemeRegistry options={{ key: 'mui' }}>
              {children}
            </ThemeRegistry>
          </ThemeToggleProvider>
        </ComponentProvider>

  );
}