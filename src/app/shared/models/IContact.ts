export interface IContact {
  nom: string;
  email: string;
  sujet: string;
  message: string;
}

export interface IContactResponse {
  message: string;
  data: IContact & {
    id: number;
    statut: string;
    date_envoi: string;
  };
}