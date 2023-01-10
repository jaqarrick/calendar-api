import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { Event } from './entities/event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>,
  ) {}
  create(user: User, createEventInput: CreateEventInput) {
    const newEvent = this.eventRepository.create(createEventInput);
    newEvent.user = user;

    user.events = [...user.events, newEvent];
    user.save();
    return this.eventRepository.save(newEvent);
  }

  findAll() {
    return this.eventRepository.find();
  }

  findOne(uuid: string) {
    return this.eventRepository.findOneBy({
      uuid,
    });
  }

  update(id: number, updateEventInput: UpdateEventInput) {
    return `This action updates a #${id} event`;
  }

  remove(id: number) {
    return `This action removes a #${id} event`;
  }
}
