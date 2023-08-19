export type CategoryProperties = {
  name: string,
  description?: string,
  is_active?: boolean,
  created_at?: Date
}

export class Category {
  constructor(public readonly props: CategoryProperties) {
    this.description = this.props.description;
    this.is_active = this.props.is_active ?? true;
    this.props.created_at = this.props.created_at ?? new Date();
  }

  get name(): string {
    return this.props.name;
  }

  private set description(value: string) {
    this.props.description = value ?? null;
  }

  get description(): string {
    return this.props.description;
  }

  private set is_active(value: boolean) {
    this.props.is_active = value ?? true;
  }

  get is_active(): boolean {
    return this.props.is_active;
  }

  get created_at(): Date | undefined {
    return this.props.created_at;
  }
}