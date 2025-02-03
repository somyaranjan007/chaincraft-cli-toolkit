import { z } from "zod";
export var BlockchainType;
(function (BlockchainType) {
    BlockchainType["ETHEREUM"] = "Ethereum";
    BlockchainType["SOLANA"] = "Solana";
    BlockchainType["COSMOS"] = "Cosmos";
})(BlockchainType || (BlockchainType = {}));
export var ContractLanguageType;
(function (ContractLanguageType) {
    ContractLanguageType["SOLIDITY"] = "Solidity";
    ContractLanguageType["RUST"] = "Rust";
    ContractLanguageType["GO"] = "Go";
    ContractLanguageType["VYPER"] = "Vyper";
})(ContractLanguageType || (ContractLanguageType = {}));
export var EnvironmentType;
(function (EnvironmentType) {
    EnvironmentType["NODE"] = "Javascript";
    EnvironmentType["RUST"] = "Rust";
    EnvironmentType["GOLANG"] = "Go Lang";
})(EnvironmentType || (EnvironmentType = {}));
export const ConfigurationSchemaValidation = z.object({
    chain: z.nativeEnum(BlockchainType),
    language: z.nativeEnum(ContractLanguageType),
    environment: z.nativeEnum(EnvironmentType),
    projectName: z.string()
        .min(5, "Project name cannot be empty")
        .max(50, 'Project name too long')
        .regex(/^[a-zA-Z][a-zA-Z0-9]*$/, 'Project name must start with a letter and contain only alphanumeric characters')
});
