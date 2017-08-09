import { ProfileFilter } from './profile-filter.interface';
import { TypeFilter } from './type-filter.interface';
import { TagFilter } from './tag-filter.interface';

export interface AllFiltersInterface {
    resetProfiles: boolean,
    numberOfSelectedProfiles: number,
    resetTypes: boolean,
    numberOfSelectedTypes: number,
    resetTags: boolean,
    numberOfSelectedTags: number,
    profiles: ProfileFilter[],
    types: TypeFilter[],
    tags: TagFilter[]
}
