import { getProfile } from "../services/user"

export const defaultOptions = {
  queries : {
    refetchOnWindowFocus : false,
    refetchOnMount : false,
    retry : 1,
    staleTime : 60 * 100
  }
}

export const useQueryForProfileOptions = {
  queryKey : ['profile'],
  queryFn : () => getProfile()
}