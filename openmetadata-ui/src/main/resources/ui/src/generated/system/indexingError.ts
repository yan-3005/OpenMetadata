/*
 *  Copyright 2025 Collate.
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
/**
 * This schema defines Event Publisher Job Error Schema. Additional properties exist for
 * backward compatibility. Don't use it.
 */
export interface IndexingError {
    errorSource?:      ErrorSource;
    failedCount?:      number;
    failedEntities?:   EntityError[];
    lastFailedCursor?: string;
    message?:          string;
    reason?:           string;
    stackTrace?:       string;
    submittedCount?:   number;
    successCount?:     number;
    [property: string]: any;
}

export enum ErrorSource {
    Job = "Job",
    Processor = "Processor",
    Reader = "Reader",
    Sink = "Sink",
}

/**
 * Entity And Message Scehma in case of failures.
 */
export interface EntityError {
    entity?:  any;
    message?: string;
}
