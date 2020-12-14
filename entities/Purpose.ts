import {Entity, Id, WithEnabled} from './common';
import {SegmentName} from "./Segment";
import {ActivityIndicatorName} from "./ActivityIndicator";
import {ActivityFieldName, ProfileFieldName} from "./common/Field";
import {ActivitySchemaName} from "./Schema";

export type PurposeId = Id;

export interface Purpose extends Omit<Entity<PurposeId>, keyof WithEnabled> {
  externalId: string;
  reason: string;
  customerAttributes?: ProfileFieldName[];
  customerSegments?: SegmentName[];
  customerActivityIndicators?: ActivityIndicatorName[];
  customerActivities?: Record<ActivitySchemaName, ActivityFieldName[]>;
}
