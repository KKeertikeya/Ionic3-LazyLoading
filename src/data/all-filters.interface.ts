import { ProfileFilter } from './profile-filter.interface';
import { TypeFilter } from './type-filter.interface';

export interface AllFilters {
    profiles: ProfileFilter[],
    types: TypeFilter[],
    tags: string[]
}
