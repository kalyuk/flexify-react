import { useContext } from 'react';
import { ContainerClassType, Container } from '@flexify/core';
import { ContainerValue } from './container.provider';

export function useDi<T>(Target: ContainerClassType<T> | any): T {
    const context: Container = useContext(ContainerValue);

    return context.get(Target);
}
