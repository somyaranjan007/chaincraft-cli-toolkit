#!/usr/bin/env node
import { program } from "commander";
import inquirer from "inquirer";
import chalk from "chalk";
import { BlockchainType, ContractLanguageType, EnvironmentType, ConfigurationSchemaValidation } from "../types/promptTypes.js";
import { z } from "zod";
const createCLICommand = async () => {
    try {
        const answers = await inquirer.prompt([
            {
                type: "list",
                name: "chain",
                message: chalk.blue('Choose the blockchain to deploy the contract:'),
                choices: Object.values(BlockchainType),
                default: BlockchainType.ETHEREUM
            },
            {
                type: "list",
                name: "language",
                message: chalk.blue('Choose your contract programming language:'),
                choices: Object.values(ContractLanguageType),
                default: ContractLanguageType.SOLIDITY
            },
            {
                type: "list",
                name: "environment",
                message: chalk.blue('Choose your environment:'),
                choices: Object.values(EnvironmentType),
                default: EnvironmentType.NODE
            },
            {
                type: "input",
                name: "projectName",
                message: chalk.blue('Enter your project name: '),
                default: "project",
                validate: (input) => {
                    if (!/^[a-zA-Z][a-zA-Z0-9]*$/.test(input)) {
                        return 'Project name must start with a letter and contain only alphanumeric characters';
                    }
                    return true;
                }
            }
        ]);
        const validatedConfig = ConfigurationSchemaValidation.parse(answers);
        console.log(chalk.green('\n✨ Contract configuration created successfully!'));
        console.log(chalk.cyan('Selected Configuration:'));
        console.log(chalk.yellow(`Blockchain: ${validatedConfig.chain}`));
        console.log(chalk.yellow(`Language: ${validatedConfig.language}`));
        console.log(chalk.yellow(`Environment: ${validatedConfig.environment}`));
        console.log(chalk.yellow(`Project Name: ${validatedConfig.projectName}`));
        await handleProjectCreation(validatedConfig);
    }
    catch (error) {
        if (error instanceof z.ZodError) {
            console.error(chalk.red('Validation error:'), error.errors);
        }
        else {
            console.error(chalk.red('An unexpected error occurred:'), error);
        }
        process.exit(1);
    }
};
async function handleProjectCreation(config) {
    console.log(chalk.gray('Creating contract...'));
}
const cli = program
    .name("chaincraft")
    .description("Professional blockchain contract creation tool")
    .version("1.0.0");
cli.command("create")
    .description("Initialize a new smart contract project")
    .action(createCLICommand);
async function main() {
    try {
        await cli.parseAsync(process.argv);
    }
    catch (error) {
        console.error(chalk.red('Fatal error:'), error);
        process.exit(1);
    }
}
main();
