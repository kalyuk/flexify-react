import * as React from 'react';
import { ContainerClassType } from '@flexify/core';
import { Container } from './container.provider';

export function useDi<T>(Target: ContainerClassType<T> | any): T {
    const context = React.useContext(Container);

    return context.get(Target);
}
