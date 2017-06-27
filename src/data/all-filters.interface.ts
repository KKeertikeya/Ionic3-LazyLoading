import { ProfileFilter } from './profile-filter.interface';
import { TypeFilter } from './type-filter.interface';

export interface AllFiltersInterface {
    profiles: ProfileFilter[],
    types: TypeFilter[],
    tags: string[]
}
