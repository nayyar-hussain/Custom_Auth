"use server";

import { cookies } from "next/headers";

export const logoutUser = async () => {
  const cookieStore = await cookies(); // ✅ await
  cookieStore.delete( 
    {
        name : 'token',
        path : '/'
    }
  );
};
