"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLoginRequestSchema = exports.userRequestPutPostSchema = void 0;
exports.userRequestPutPostSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        name: { type: "string", minLength: 1 },
        email: { type: "string", minLength: 1 },
        mobile: { type: "string", minLength: 1 },
        city: { type: "string", nullable: true },
        state: { type: "string", nullable: true },
        country: { type: "string", nullable: true },
        job: { type: "string", nullable: true },
        gender: { type: "string", nullable: true },
        userType: { type: "string", nullable: true },
        status: { type: "string", nullable: true },
        addIpAddress: { type: "string", nullable: true },
        addDateTime: { type: "string", nullable: true },
        userScore: { type: "string", nullable: true },
    },
    required: ["name", "email", "mobile"],
    additionalProperties: false
};
exports.userLoginRequestSchema = {
    $schema: "http://json-schema.org/draft-07/schema#",
    type: "object",
    properties: {
        email: { type: "string", minLength: 1 },
        otp: { type: "string", minLength: 1 }
    },
    required: ["email", "otp"],
    additionalProperties: false
};
