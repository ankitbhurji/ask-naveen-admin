"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationHelper = void 0;
const ajv_1 = __importDefault(require("ajv"));
const userRequestPutPostSchema_1 = require("../schemas/userRequestPutPostSchema");
class ValidationHelper {
    constructor() {
        this._ajv = new ajv_1.default({ useDefaults: true, allErrors: true });
        this._userPostCompiledSchema = this._ajv.compile(userRequestPutPostSchema_1.userRequestPutPostSchema);
        this._userLoginCompiledSchema = this._ajv.compile(userRequestPutPostSchema_1.userLoginRequestSchema);
    }
    ifSpecialCharExist(str) {
        const pattern = /[\!\@\#\$\%\^\&\*\(\)\+\=\}\{\]\[\\\|\:\;\?\/\>\.\<\~]/;
        return pattern.test(str);
    }
    userPostPutRequest(data, type) {
        return this._validateData(this._userPostCompiledSchema, data, type);
    }
    userloginRequest(data, type) {
        return this._validateData(this._userLoginCompiledSchema, data, type);
    }
    _validateData(validateFunction, data, type) {
        if (validateFunction(data)) {
            return {
                invalid: false,
                reason: [],
                data: data
            };
        }
        else {
            // console.log(validateFunction.errors,type)
            if (!validateFunction.errors) {
                return {
                    invalid: true,
                    reason: []
                };
            }
            return {
                invalid: true,
                reason: validateFunction.errors.map((err) => ({
                    instancePath: err.instancePath,
                    params: err.params,
                    message: err.message,
                }))
            };
        }
    }
    static get singleton() {
        if (!st) {
            st = new ValidationHelper();
        }
        return st;
    }
}
exports.ValidationHelper = ValidationHelper;
let st;
