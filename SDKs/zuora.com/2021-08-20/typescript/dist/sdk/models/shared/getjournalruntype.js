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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetJournalRunType = exports.GetJournalRunTypeStatusEnum = void 0;
var utils_1 = require("../../../internal/utils");
var getjournalruntransactiontype_1 = require("./getjournalruntransactiontype");
var GetJournalRunTypeStatusEnum;
(function (GetJournalRunTypeStatusEnum) {
    GetJournalRunTypeStatusEnum["Pending"] = "Pending";
    GetJournalRunTypeStatusEnum["Processing"] = "Processing";
    GetJournalRunTypeStatusEnum["Completed"] = "Completed";
    GetJournalRunTypeStatusEnum["Error"] = "Error";
    GetJournalRunTypeStatusEnum["CancelInprogress"] = "CancelInprogress";
    GetJournalRunTypeStatusEnum["Cancelled"] = "Cancelled";
    GetJournalRunTypeStatusEnum["DeleteInprogress"] = "DeleteInprogress";
})(GetJournalRunTypeStatusEnum = exports.GetJournalRunTypeStatusEnum || (exports.GetJournalRunTypeStatusEnum = {}));
var GetJournalRunType = /** @class */ (function (_super) {
    __extends(GetJournalRunType, _super);
    function GetJournalRunType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=aggregateCurrency" }),
        __metadata("design:type", Boolean)
    ], GetJournalRunType.prototype, "aggregateCurrency", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=executedOn" }),
        __metadata("design:type", Date)
    ], GetJournalRunType.prototype, "executedOn", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=journalEntryDate" }),
        __metadata("design:type", Date)
    ], GetJournalRunType.prototype, "journalEntryDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=number" }),
        __metadata("design:type", String)
    ], GetJournalRunType.prototype, "number", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=segmentationRuleName" }),
        __metadata("design:type", String)
    ], GetJournalRunType.prototype, "segmentationRuleName", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GetJournalRunType.prototype, "status", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=success" }),
        __metadata("design:type", Boolean)
    ], GetJournalRunType.prototype, "success", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetEndDate" }),
        __metadata("design:type", Date)
    ], GetJournalRunType.prototype, "targetEndDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=targetStartDate" }),
        __metadata("design:type", Date)
    ], GetJournalRunType.prototype, "targetStartDate", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=totalJournalEntryCount" }),
        __metadata("design:type", Number)
    ], GetJournalRunType.prototype, "totalJournalEntryCount", void 0);
    __decorate([
        (0, utils_1.SpeakeasyMetadata)({ data: "json, name=transactionTypes", elemType: getjournalruntransactiontype_1.GetJournalRunTransactionType }),
        __metadata("design:type", Array)
    ], GetJournalRunType.prototype, "transactionTypes", void 0);
    return GetJournalRunType;
}(utils_1.SpeakeasyBase));
exports.GetJournalRunType = GetJournalRunType;
