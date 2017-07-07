import { ProfileFilter } from './profile-filter.interface';
import { TypeFilter } from './type-filter.interface';
import { TagFilter } from './tag-filter.interface';

export interface AllFiltersInterface {
    profiles: ProfileFilter[],
    types: TypeFilter[],
    tags: TagFilter[]
}
