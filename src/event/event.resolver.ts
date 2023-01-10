import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EventService } from './event.service';
import { Event } from './entities/event.object';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { UserService } from 'src/user/user.service';

@Resolver(() => Event)
export class EventResolver {
  constructor(private readonly eventService: EventService, private readonly userService: UserService) {}

  @Mutation(() => Event)
  async createEvent(@Args('userId') userId: string, @Args('createEventInput') createEventInput: CreateEventInput) {
    const user = await this.userService.findOne(userId)
    return this.eventService.create(user, createEventInput);
  }

  @Query(() => [Event], { name: 'events' })
  findAll() {
    return this.eventService.findAll();
  }

  @Query(() => Event, { name: 'event' })
  findOne(@Args('uuid') uuid: string) {
    return this.eventService.findOne(uuid);
  }

  @Mutation(() => Event)
  updateEvent(@Args('updateEventInput') updateEventInput: UpdateEventInput) {
    return this.eventService.update(updateEventInput.id, updateEventInput);
  }

  @Mutation(() => Event)
  removeEvent(@Args('id', { type: () => Int }) id: number) {
    return this.eventService.remove(id);
  }
}
