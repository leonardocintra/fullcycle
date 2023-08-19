export type CategoryProperties = {
  name: string,
  description?: string,
  is_active?: boolean,
  created_at?: Date
}

export class Category {
  constructor(readonly props: CategoryProperties) { }

  get name(): string {
    return this.name;
  }

  get description(): string {
    return this.description;
  }

  get is_active(): boolean | undefined {
    return this.is_active;
  }

  get created_at(): Date {
    return this.created_at;
  }
}