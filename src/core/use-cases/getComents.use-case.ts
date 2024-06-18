import { GetAllComentsInterface } from "../../presentation/interfaces";


interface Props {
  page?: number;
  limit?: number;
};

export const getComentsUseCase = async( {}: Props ): Promise<GetAllComentsInterface> => {
  // const url = `${envs.apiUrl}`;

  // TODO: agregar la API real con los endpoints
  return {
    message: 'already get users',
    coments: [{
      coment: 'Hola, este es un comentario de prueba',
      date: new Date(),
      stars: 5,
      user: {
        date: new Date(),
        email: 'jorge.yael333@gmail.com',
        id: Date.now(),
        isActive: true,
        name: 'Jorge Yael',
        roles: ['USER', 'SUPER_USER_BASIC'],
        totalAmountPaid: 50,
        verify: true,
      }
    }]
  }
}
