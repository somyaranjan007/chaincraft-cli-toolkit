import { z } from "zod";

export enum BlockchainType {
    ETHEREUM = "Ethereum",
    SOLANA = "Solana",
    COSMOS = "Cosmos",
}

export enum ContractLanguageType {
    SOLIDITY = 'Solidity',
    RUST = 'Rust',
    GO = 'Go',
    VYPER = 'Vyper'
}

export enum EnvironmentType {
    NODE = "Javascript",
    RUST = "Rust",
    GOLANG = "Go Lang"
}

export interface Configuration {
    chain: BlockchainType;
    language: ContractLanguageType,
    environment: EnvironmentType,
    projectName: string;
}

export const ConfigurationSchemaValidation = z.object({
    chain: z.nativeEnum(BlockchainType),
    language: z.nativeEnum(ContractLanguageType),
    environment: z.nativeEnum(EnvironmentType),
    projectName: z.string()
        .min(5, "Project name cannot be empty")
        .max(50, 'Project name too long')
        .regex(/^[a-zA-Z][a-zA-Z0-9]*$/, 'Project name must start with a letter and contain only alphanumeric characters')
})