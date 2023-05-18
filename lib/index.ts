#!/usr/bin/env node
import { getLambdaFunction } from "./services/lambdaFunctionPacker.service"

(async function compileLambdaFunction() {

    const rpc                             = process.argv[2];
    const governanceProxyContractAddress  = process.argv[3];
    const lambdaFunctionName              = process.argv[4];
    const args                            = process.argv.slice(5);
    const lambdaFunctionParameters        = args;

    if (!rpc || !governanceProxyContractAddress || !lambdaFunctionName) {
        return console.info("Usage: proposal-data-maker <rpc_url> <governance_proxy_contract_address> <lambda_function_name> <parameters...>");
    }

    // Get the lambda function
    const lambdaFunction    = await getLambdaFunction(
        rpc,
        governanceProxyContractAddress,
        lambdaFunctionName,
        lambdaFunctionParameters
    );
    console.log(lambdaFunction);
})();

export const createLambdaBytes = (

    rpc: string,
    governanceProxyContractAddress: string,
    lambdaFunctionName: string,
    lambdaFunctionParameters: Array<string>

) => getLambdaFunction(
    rpc,
    governanceProxyContractAddress,
    lambdaFunctionName,
    lambdaFunctionParameters
);
