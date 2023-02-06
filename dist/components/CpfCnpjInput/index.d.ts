import React from 'react';
declare type CpfCnpjInputProps = {
    as?: React.FC<any & InputProps>;
    style?: React.CSSProperties;
    alwaysShowMask?: boolean;
    defaultMaskType?: 'CPF' | 'CNPJ';
};
declare type InputProps = JSX.IntrinsicElements['input'];
export declare function clearCpfCnpj(value: string): string;
export declare function isCpf(value: string): boolean;
export declare function isCnpj(value: string): boolean;
declare const CpfCnpjInput: React.FC<CpfCnpjInputProps & InputProps>;
export default CpfCnpjInput;
