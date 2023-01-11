"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListMeetingSatisfactionResponse = exports.ListMeetingSatisfactionRequest = exports.ListMeetingSatisfaction200ApplicationJson = exports.ListMeetingSatisfaction200ApplicationJsonClientSatisfaction = exports.ListMeetingSatisfactionSecurity = exports.ListMeetingSatisfactionQueryParams = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListMeetingSatisfactionQueryParams = /** @class */ (function (_super) {
    __extends(ListMeetingSatisfactionQueryParams, _super);
    function ListMeetingSatisfactionQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=from" }),
        __metadata("design:type", Date)
    ], ListMeetingSatisfactionQueryParams.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=to" }),
        __metadata("design:type", Date)
    ], ListMeetingSatisfactionQueryParams.prototype, "to", void 0);
    return ListMeetingSatisfactionQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListMeetingSatisfactionQueryParams = ListMeetingSatisfactionQueryParams;
var ListMeetingSatisfactionSecurity = /** @class */ (function (_super) {
    __extends(ListMeetingSatisfactionSecurity, _super);
    function ListMeetingSatisfactionSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOAuth)
    ], ListMeetingSatisfactionSecurity.prototype, "oAuth", void 0);
    return ListMeetingSatisfactionSecurity;
}(utils_1.SpeakeasyBase));
exports.ListMeetingSatisfactionSecurity = ListMeetingSatisfactionSecurity;
var ListMeetingSatisfaction200ApplicationJsonClientSatisfaction = /** @class */ (function (_super) {
    __extends(ListMeetingSatisfaction200ApplicationJsonClientSatisfaction, _super);
    function ListMeetingSatisfaction200ApplicationJsonClientSatisfaction() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=date" }),
        __metadata("design:type", Date)
    ], ListMeetingSatisfaction200ApplicationJsonClientSatisfaction.prototype, "date", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=good_count" }),
        __metadata("design:type", Number)
    ], ListMeetingSatisfaction200ApplicationJsonClientSatisfaction.prototype, "goodCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=none_count" }),
        __metadata("design:type", Number)
    ], ListMeetingSatisfaction200ApplicationJsonClientSatisfaction.prototype, "noneCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=not_good_count" }),
        __metadata("design:type", Number)
    ], ListMeetingSatisfaction200ApplicationJsonClientSatisfaction.prototype, "notGoodCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=satisfaction_percent" }),
        __metadata("design:type", Number)
    ], ListMeetingSatisfaction200ApplicationJsonClientSatisfaction.prototype, "satisfactionPercent", void 0);
    return ListMeetingSatisfaction200ApplicationJsonClientSatisfaction;
}(utils_1.SpeakeasyBase));
exports.ListMeetingSatisfaction200ApplicationJsonClientSatisfaction = ListMeetingSatisfaction200ApplicationJsonClientSatisfaction;
var ListMeetingSatisfaction200ApplicationJson = /** @class */ (function (_super) {
    __extends(ListMeetingSatisfaction200ApplicationJson, _super);
    function ListMeetingSatisfaction200ApplicationJson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=client_satisfaction", elemType: ListMeetingSatisfaction200ApplicationJsonClientSatisfaction }),
        __metadata("design:type", Array)
    ], ListMeetingSatisfaction200ApplicationJson.prototype, "clientSatisfaction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=from" }),
        __metadata("design:type", Date)
    ], ListMeetingSatisfaction200ApplicationJson.prototype, "from", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=to" }),
        __metadata("design:type", Date)
    ], ListMeetingSatisfaction200ApplicationJson.prototype, "to", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=total_records" }),
        __metadata("design:type", Number)
    ], ListMeetingSatisfaction200ApplicationJson.prototype, "totalRecords", void 0);
    return ListMeetingSatisfaction200ApplicationJson;
}(utils_1.SpeakeasyBase));
exports.ListMeetingSatisfaction200ApplicationJson = ListMeetingSatisfaction200ApplicationJson;
var ListMeetingSatisfactionRequest = /** @class */ (function (_super) {
    __extends(ListMeetingSatisfactionRequest, _super);
    function ListMeetingSatisfactionRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMeetingSatisfactionQueryParams)
    ], ListMeetingSatisfactionRequest.prototype, "queryParams", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMeetingSatisfactionSecurity)
    ], ListMeetingSatisfactionRequest.prototype, "security", void 0);
    return ListMeetingSatisfactionRequest;
}(utils_1.SpeakeasyBase));
exports.ListMeetingSatisfactionRequest = ListMeetingSatisfactionRequest;
var ListMeetingSatisfactionResponse = /** @class */ (function (_super) {
    __extends(ListMeetingSatisfactionResponse, _super);
    function ListMeetingSatisfactionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Uint8Array)
    ], ListMeetingSatisfactionResponse.prototype, "body", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListMeetingSatisfactionResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListMeetingSatisfactionResponse.prototype, "statusCode", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListMeetingSatisfaction200ApplicationJson)
    ], ListMeetingSatisfactionResponse.prototype, "listMeetingSatisfaction200ApplicationJSONObject", void 0);
    return ListMeetingSatisfactionResponse;
}(utils_1.SpeakeasyBase));
exports.ListMeetingSatisfactionResponse = ListMeetingSatisfactionResponse;
