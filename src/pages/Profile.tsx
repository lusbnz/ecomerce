import { getAuth, signOut } from "firebase/auth";
import type React from "react";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PenSquare, Plus } from "lucide-react";
import Container from "@/components/Container";
import { useDispatch, useSelector } from "react-redux";
import { StoreState } from "types";
import { removeUser } from "@/redux/bazarSlice";
import Loader from "@/components/Loader";
import { useNavigate } from "react-router";
import _ from "lodash";

// Mock user data
const userData = {
  name: "Jane Doe",
  email: "jane.doe@example.com",
  avatarUrl: "/placeholder.svg?height=100&width=100",
  memberSince: "2021-05-15",
  addresses: [
    {
      id: 1,
      type: "Home",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      country: "USA",
    },
    {
      id: 2,
      type: "Work",
      street: "456 Office Blvd",
      city: "Workville",
      state: "NY",
      zipCode: "67890",
      country: "USA",
    },
  ],
};

const Profile: React.FC = () => {
  const [addresses, setAddresses] = useState(userData.addresses);
  const { userInfo } = useSelector((state: StoreState) => state?.bazar);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (_.isEmpty(userInfo)) {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const handleDeleteAddress = (id: number) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  const handleLogout = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const auth = getAuth();
    await signOut(auth);
    dispatch(removeUser());
    navigate("/login");
  };

  return (
    <>
      {userInfo ? (
        <Container className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>

          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>User Information</CardTitle>
                <CardDescription>Your personal details</CardDescription>
              </CardHeader>
              <CardContent className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={userInfo?.photoURL} alt={userData?.name} />
                  <AvatarFallback>
                    {userInfo
                      .displayName!.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h2 className="text-2xl font-semibold">
                    {userInfo?.displayName}
                  </h2>
                  <p className="text-muted-foreground">{userInfo?.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Member since:{" "}
                    <span className="font-semibold">
                      {userInfo?.providerId}
                    </span>
                  </p>
                </div>
              </CardContent>
              <p className="p-4 lg:p-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                error perferendis rerum dolorem esse doloremque, alias officiis
                recusandae inventore, deserunt distinctio aliquam! Distinctio
                ipsum nihil harum accusantium doloremque est, rem recusandae
                quam quos nemo atque expedita eligendi accusamus doloribus
                consectetur. Consectetur officiis sint voluptas nulla minus unde
                harum. Libero, molestias?
              </p>
              <CardContent className="mt-4">
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  className="w-full"
                >
                  <PenSquare className="mr-2 h-4 w-4" /> Log out
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>My Addresses</CardTitle>
                <CardDescription>
                  Manage your shipping addresses
                </CardDescription>
              </CardHeader>
              <CardContent>
                {addresses.map((address) => (
                  <div key={address.id} className="mb-4 p-4 border rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <Badge>{address.type}</Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDeleteAddress(address.id)}
                      >
                        Delete
                      </Button>
                    </div>
                    <p>{address.street}</p>
                    <p>{`${address.city}, ${address.state} ${address.zipCode}`}</p>
                    <p>{address.country}</p>
                  </div>
                ))}
                <Button className="w-full mt-4">
                  <Plus className="mr-2 h-4 w-4" /> Add New Address
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Profile;
