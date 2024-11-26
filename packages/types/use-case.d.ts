export interface UseCase<DTO, Response> {
  execute(dto?: DTO): Promise<Response> | Response;
}
