// services/ListService.ts
import { RestService } from './restService';
import { TodoList } from '@/models';
import config from '@/config';

/** Service for managing TodoList resources via REST API */
export class ListService extends RestService<TodoList> {
  constructor() {
    // Use baseUrl from config and the specific route (e.g. '/lists')
    super(config.api.baseUrl, '/lists');
  }
}

// Export a singleton instance for use throughout the app
export const listService = new ListService();