package io.egen.rrs;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;
import io.egen.beans.ReservationBean;
import io.egen.beans.ResponseBean;
import io.egen.dao.ReservationCancellationDAO;
import io.egen.dao.ReservationDAO;
import io.egen.dao.ReservationGetterDAO;
import io.egen.utils.DAOException;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
@Path("reservation")
@Api(tags = { "reservation" })
public class ReservationControl {

	/**
	 * Create a reservation
	 */
	@Path("create")
	@POST
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Create Reservation", notes = " Create Reservation for a customer. Date MM-dd-yyyy eg:01-01-2016,"
			+ "Time format is h:mm a. eg: 10:10 AM")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
			@ApiResponse(code = 400, message = "Bad Request"),
			@ApiResponse(code = 500, message = "Internal Service Error") })
	public ReservationBean create(@QueryParam("date") String date, @QueryParam("time") String time,
			@QueryParam("partySize") String partySize, @QueryParam("contactNumber") String contactNumber) {
		try {
			return new ReservationDAO().create(date, time, partySize, contactNumber);
		} catch (DAOException e) {
			e.printStackTrace();
		}
		return null;
	}

	/**
	 * edit a reservation
	 */
	@Path("edit")
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Edit Reservation", notes = " Update/Edit a Reservation Detail. Date MM-dd-yyyy eg:01-01-2016,"
			+ "Time format is h:mm a. eg: 10:10 AM")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
			@ApiResponse(code = 400, message = "Bad Request"),
			@ApiResponse(code = 404, message = "Not Found"),
			@ApiResponse(code = 500, message = "Internal Service Error") })
	public ReservationBean edit(@QueryParam("confirmationcode") String confirmationCode,
			@QueryParam("date") String date, @QueryParam("time") String time, @QueryParam("partySize") String partySize,
			@QueryParam("contactNumber") String contactNumber) {
		try {
			return new ReservationDAO().edit(confirmationCode, date, time, Integer.parseInt(partySize), contactNumber);
		} catch (DAOException e) {
			e.printStackTrace();
		}
		return null;
	}
	/**
	 * Cancel a reservation
	 */
	@Path("cancel")
	@PUT
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Cancel Reservation", notes = " Update/Cancel a Reservation Detail")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
			@ApiResponse(code = 400, message = "Bad Request"),
			@ApiResponse(code = 404, message = "Not Found"),
			@ApiResponse(code = 500, message = "Internal Service Error") })
	public ResponseBean cancel(@QueryParam("confirmationcode") String confirmationCode) {
		try {
			new ReservationCancellationDAO().cancel(confirmationCode);
			return new ResponseBean("Success");
		} catch (DAOException e) {
			e.printStackTrace();
		}
		return new ResponseBean("Failure");
	}

	@Path("reservation/{confirmationcode}")
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@ApiOperation(value = "Reservation details", notes = " Reservation details for the confirmationcode")
	@ApiResponses(value = { @ApiResponse(code = 200, message = "Success"),
			@ApiResponse(code = 404, message = "Not Found"),
			@ApiResponse(code = 500, message = "Internal Service Error") })
	public ReservationBean reservation(@PathParam("confirmationcode") String confirmationCode) {
		try {
			return new ReservationGetterDAO().getReservation(confirmationCode);
		} catch (DAOException e) {
			e.printStackTrace();
		}
		return null;
	}
}