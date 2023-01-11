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
exports.ListEventsResponse = exports.ListEventsRequest = exports.ListEventsQueryParams = exports.ListEventsTypesEnum = exports.ListEventsStatesEnum = exports.ListEventsOrderEnum = exports.ListEventsDirectionEnum = void 0;
var utils_1 = require("../../../internal/utils");
var shared = __importStar(require("../shared"));
var ListEventsDirectionEnum;
(function (ListEventsDirectionEnum) {
    ListEventsDirectionEnum["Inbound"] = "INBOUND";
    ListEventsDirectionEnum["Outbound"] = "OUTBOUND";
})(ListEventsDirectionEnum = exports.ListEventsDirectionEnum || (exports.ListEventsDirectionEnum = {}));
var ListEventsOrderEnum;
(function (ListEventsOrderEnum) {
    ListEventsOrderEnum["Desc"] = "DESC";
    ListEventsOrderEnum["Asc"] = "ASC";
})(ListEventsOrderEnum = exports.ListEventsOrderEnum || (exports.ListEventsOrderEnum = {}));
var ListEventsStatesEnum;
(function (ListEventsStatesEnum) {
    ListEventsStatesEnum["Initializing"] = "INITIALIZING";
    ListEventsStatesEnum["Ringing"] = "RINGING";
    ListEventsStatesEnum["Active"] = "ACTIVE";
    ListEventsStatesEnum["Held"] = "HELD";
    ListEventsStatesEnum["RemoteHeld"] = "REMOTE_HELD";
    ListEventsStatesEnum["Detached"] = "DETACHED";
    ListEventsStatesEnum["Rejected"] = "REJECTED";
    ListEventsStatesEnum["Cancelled"] = "CANCELLED";
    ListEventsStatesEnum["Answered"] = "ANSWERED";
    ListEventsStatesEnum["Missed"] = "MISSED";
})(ListEventsStatesEnum = exports.ListEventsStatesEnum || (exports.ListEventsStatesEnum = {}));
var ListEventsTypesEnum;
(function (ListEventsTypesEnum) {
    ListEventsTypesEnum["Call"] = "CALL";
})(ListEventsTypesEnum = exports.ListEventsTypesEnum || (exports.ListEventsTypesEnum = {}));
var ListEventsQueryParams = /** @class */ (function (_super) {
    __extends(ListEventsQueryParams, _super);
    function ListEventsQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=direction" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "direction", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=fromDate" }),
        __metadata("design:type", Number)
    ], ListEventsQueryParams.prototype, "fromDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=offset" }),
        __metadata("design:type", Number)
    ], ListEventsQueryParams.prototype, "offset", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=order" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "order", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=size" }),
        __metadata("design:type", Number)
    ], ListEventsQueryParams.prototype, "size", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "sort", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=states" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "states", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=toDate" }),
        __metadata("design:type", Number)
    ], ListEventsQueryParams.prototype, "toDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "queryParam, style=form;explode=true;name=types" }),
        __metadata("design:type", String)
    ], ListEventsQueryParams.prototype, "types", void 0);
    return ListEventsQueryParams;
}(utils_1.SpeakeasyBase));
exports.ListEventsQueryParams = ListEventsQueryParams;
var ListEventsRequest = /** @class */ (function (_super) {
    __extends(ListEventsRequest, _super);
    function ListEventsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", ListEventsQueryParams)
    ], ListEventsRequest.prototype, "queryParams", void 0);
    return ListEventsRequest;
}(utils_1.SpeakeasyBase));
exports.ListEventsRequest = ListEventsRequest;
var ListEventsResponse = /** @class */ (function (_super) {
    __extends(ListEventsResponse, _super);
    function ListEventsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", String)
    ], ListEventsResponse.prototype, "contentType", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", shared.ErrorResponse)
    ], ListEventsResponse.prototype, "errorResponse", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ elemType: shared.Event }),
        __metadata("design:type", Array)
    ], ListEventsResponse.prototype, "events", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)(),
        __metadata("design:type", Number)
    ], ListEventsResponse.prototype, "statusCode", void 0);
    return ListEventsResponse;
}(utils_1.SpeakeasyBase));
exports.ListEventsResponse = ListEventsResponse;
