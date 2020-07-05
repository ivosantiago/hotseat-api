import { container } from 'tsyringe';

import AppointmentsRepository from '@domains/appointments/infra/database/repositories/AppointmentsRepository';
import IAppointmentsRepository from '@domains/appointments/interfaces/IAppointmentsRepository';

import UsersRepository from '@domains/users/infra/database/repositories/UsersRepository';
import IUsersRepository from '@domains/users/interfaces/IUsersRepository';

import RecoverPasswordRequestsRepository from '@domains/users/infra/database/repositories/RecoverPasswordRequestsRepository';
import IRecoverPasswordRequestsRepository from '@domains/users/interfaces/IRecoverPasswordRequestsRepository';

import '@domains/users/providers';
import './providers';

container.registerSingleton<IAppointmentsRepository>(
  'AppointmentsRepository',
  AppointmentsRepository,
);

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IRecoverPasswordRequestsRepository>(
  'RecoverPasswordRequestsMailRepository',
  RecoverPasswordRequestsRepository,
);

export default container;
